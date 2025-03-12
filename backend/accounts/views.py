from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import CustomUser
from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['POST'])
def register_user(request):
    try:
        data = request.data
        print("Received data:", data)  # Debugging line

        if CustomUser.objects.filter(username=data.get('username')).exists():
            return Response({'message': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

        user = CustomUser.objects.create(
            username=data.get('username'),
            email=data.get('email'),
            password=make_password(data.get('password'))  # Hash password
        )
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        print("Error during signup:", str(e))  # Debugging line
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Login API
@api_view(['POST'])
def login_user(request):
    data = request.data
    user = authenticate(username=data['username'], password=data['password'])
    
    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'Login successful'
        })
    
    return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
