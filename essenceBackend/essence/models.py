from django.db import models


#General models:
class Card(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    completed = models.BooleanField(default=False)


#models for solution:
class Requirements(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class SoftwareSystems(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class Solution(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    softwareSystems = models.OneToOneField(SoftwareSystems, on_delete=models.CASCADE)
    requirements = models.OneToOneField(Requirements, on_delete=models.CASCADE)


#Models for customer:
class Opportunity(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class Stakeholders(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class Customer(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    stakeholders = models.OneToOneField(Stakeholders, on_delete=models.CASCADE)
    opportunity = models.OneToOneField(Opportunity, on_delete=models.CASCADE)


#Models for endeavor:
class Team(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class Work(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class WayOfWork(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    cards = models.ManyToManyField(Card)


class Endeavor(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    work = models.OneToOneField(Work, on_delete=models.CASCADE)
    wayow = models.OneToOneField(WayOfWork, on_delete=models.CASCADE)


#Model for project
class Project(models.Model):
    tittle = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=True, default='')
    solution = models.OneToOneField(Solution, on_delete=models.CASCADE)
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE)
    endeavor = models.OneToOneField(Endeavor, on_delete=models.CASCADE)

#user