from django.db import models

class Books(models.Model):
    title = models.CharField(max_length=40)
    author = models.CharField(max_length=100)
    year = models.IntegerField(default=1)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
