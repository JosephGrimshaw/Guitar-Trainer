from django.db import models
from django.db.models import JSONField
# Create your models here.
class Instrument(models.Model):
    name = models.CharField(max_length=50)
    notes_data = JSONField()