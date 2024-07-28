
from django.urls import path, include
from api.views import *

urlpatterns = [
    path("notes/", NoteListCreate.as_view(), name="note_list"),
    path("notes/delete/<int:pk>", NoteDelete.as_view(), name="delete_note")
]
