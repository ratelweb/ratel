# Generated by Django 3.0 on 2019-12-07 06:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ratelweb', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bookmark',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bookmark', models.IntegerField(default=1234567891011)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(default='aaa@gmail.com', max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='Books',
        ),
        migrations.AddField(
            model_name='bookmark',
            name='iden',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ratelweb.User'),
        ),
    ]