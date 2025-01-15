from django.shortcuts import render
from django.http import JsonResponse

def friends_view(request):
    friends = [
        {
            "id": 1,
            "name": "John",
            "mainRating": 4.5,
            "characteristics": [
                {"name": "Funniness", "rating": 4.7},
                {"name": "Comfort", "rating": 4.3},
                {"name": "Trust", "rating": 4.5},
            ],
        },
        # Add more friends
    ]
    return JsonResponse(friends, safe=False)

def posts_view(request):
    posts = [
        {"author": "John", "content": "Had a great day!"},
        # Add more posts
    ]
    return JsonResponse(posts, safe=False)

def user_view(request):
    user = {
        "name": "Alice",
        "profilePhoto": "/path/to/photo.jpg",
        "bio": "Loves coding and coffee!",
    }
    return JsonResponse(user)
