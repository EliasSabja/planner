# Generated by Django 3.2.6 on 2021-08-24 19:17

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseName', models.CharField(max_length=100)),
                ('courseCode', models.CharField(max_length=100, unique=True)),
                ('semester', models.CharField(max_length=100)),
                ('credits', models.IntegerField()),
                ('requisites', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('color', models.CharField(max_length=100)),
            ],
        ),
    ]