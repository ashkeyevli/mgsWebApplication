# Generated by Django 3.0.4 on 2023-12-17 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20201214_0125'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantReview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
                ('comment', models.TextField()),
            ],
        ),
    ]
