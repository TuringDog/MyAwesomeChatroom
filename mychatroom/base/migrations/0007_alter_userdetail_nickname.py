# Generated by Django 4.0.4 on 2022-07-08 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_userdetail_nickname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetail',
            name='nickname',
            field=models.CharField(max_length=100),
        ),
    ]
