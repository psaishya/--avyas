# Generated by Django 4.1 on 2023-04-24 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0017_user_teacher_bio'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_teacher',
            name='profile',
            field=models.ImageField(null='True', upload_to='teacher_imgs/'),
            preserve_default='True',
        ),
    ]
