from django.shortcuts import render
from django.views import View
from .models import Course
from django.http import JsonResponse

# Create your views here.

class CourseListView(View):
    def get(self, request):
        courses = Course.objects.all()
        return JsonResponse(list(courses.values()), safe=False)

class CourseView(View):
    def get(self, request, pk):
        course = Course.objects.get(pk=pk)
        return JsonResponse(course, safe=False)


    def post(self, course_data):
        pass

    def put(self, course_data):
        pass
    
    def delete(self, course_data):
        pass
