# Generated by Django 4.1.7 on 2023-04-19 16:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_merge_20230419_2155'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quizquestions',
            old_name='questions',
            new_name='question',
        ),
    ]