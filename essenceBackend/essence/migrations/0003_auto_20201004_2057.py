# Generated by Django 3.1.2 on 2020-10-04 17:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('essence', '0002_auto_20201001_2151'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='tittle',
            new_name='title',
        ),
    ]