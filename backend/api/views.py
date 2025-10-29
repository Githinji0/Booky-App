from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Books
from .serializers import BookSerializer

@api_view(['GET'])
def get_books(request):
    books = Books.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_book(request):
    data = request.data
    serializer = BookSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(['PUT', 'DELETE'])
def modify_book(request,pk):
    try:
        book = Books.objects.get(pk=pk)
    except Books.DoesNotExist:
        return Response(
            {"error": "Book not found."},
            status=status.HTTP_404_NOT_FOUND
        )
    
  
    if request.method == 'DELETE':
        book.delete()
        return Response(
            {"message": "Book deleted successfully."},
            status=status.HTTP_204_NO_CONTENT
        )
    elif request.method == 'PUT':
        data = request.data
        serializer = BookSerializer(book, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )