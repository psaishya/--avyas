# Generated by Django 4.1 on 2023-04-18 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_alter_user_student_options_chapter'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chapter',
            name='teacher',
        ),
    ]
