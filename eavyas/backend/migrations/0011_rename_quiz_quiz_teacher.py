# Generated by Django 4.1.7 on 2023-04-18 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_merge_20230418_1835'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quiz',
            old_name='quiz',
            new_name='teacher',
        ),
    ]
