# Generated by Django 4.1 on 2023-04-17 15:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_course_thumbnail'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='thumbnail',
        ),
    ]