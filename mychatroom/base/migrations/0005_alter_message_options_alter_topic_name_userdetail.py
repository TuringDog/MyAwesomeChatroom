# Generated by Django 4.0.4 on 2022-07-07 04:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0004_room_participants'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['-updated', '-created']},
        ),
        migrations.AlterField(
            model_name='topic',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.CreateModel(
            name='UserDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('interested_topic', models.ManyToManyField(blank=True, related_name='intereseted_topic', to='base.topic')),
                ('subscription', models.ManyToManyField(blank=True, related_name='subscription', to='base.room')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
