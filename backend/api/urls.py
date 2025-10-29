from django.urls import path
from .views import add_book, get_books, modify_book

urlpatterns = [
    path('books/', get_books, name='get_books'),
    path('books/add/', add_book, name='add_book'),
    path('books/<int:pk>/', modify_book, name='modify_book'),
]