# Generated by Django 4.0.1 on 2022-10-11 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='pay_date',
            field=models.DateField(blank=True, null=True, verbose_name='pay date'),
        ),
        migrations.AlterField(
            model_name='payment',
            name='pay_time',
            field=models.TimeField(blank=True, null=True, verbose_name='pay time'),
        ),
    ]
