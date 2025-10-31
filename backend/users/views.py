from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
import rest_framework
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer


@api_view(['GET'])#get user details
@permission_classes([IsAuthenticated])#only authentcated persons can access this view
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)
@api_view(['POST'])#crete new user
@permission_classes([AllowAny]) # Allow any user (authenticated or not) to access this view
def createUser(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)