# Generated by Django 4.1.7 on 2023-04-23 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0019_attemptquiz'),
    ]

    operations = [
        migrations.AddField(
            model_name='attemptquiz',
            name='right_ans',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
