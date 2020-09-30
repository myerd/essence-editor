# Generated by Django 2.2.5 on 2020-09-30 17:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('essence', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Endeavor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Requirements',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='SoftwareSystems',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='WayOfWork',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='Stakeholders',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.CreateModel(
            name='Solution',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('requirements', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Requirements', unique=True)),
                ('softwareSystems', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.SoftwareSystems', unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tittle', models.CharField(default='', max_length=70)),
                ('description', models.CharField(blank=True, default='', max_length=200)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Customer', unique=True)),
                ('endeavor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Endeavor', unique=True)),
                ('solution', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Solution', unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Opportunity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('cards', models.ManyToManyField(to='essence.Card')),
            ],
        ),
        migrations.AddField(
            model_name='endeavor',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Team', unique=True),
        ),
        migrations.AddField(
            model_name='endeavor',
            name='wayow',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.WayOfWork', unique=True),
        ),
        migrations.AddField(
            model_name='endeavor',
            name='work',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Work', unique=True),
        ),
        migrations.AddField(
            model_name='customer',
            name='opportunity',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Opportunity', unique=True),
        ),
        migrations.AddField(
            model_name='customer',
            name='stakeholders',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essence.Stakeholders', unique=True),
        ),
    ]
