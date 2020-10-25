from django.db import models


# Model for project
class Project(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=True, default='')


# models for solution:
class Solution(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    project = models.OneToOneField(Project, null=True, on_delete=models.CASCADE)


class Requirements(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    solution = models.OneToOneField(Solution, null=True, on_delete=models.CASCADE)


class SoftwareSystems(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    solution = models.OneToOneField(Solution, null=True, on_delete=models.CASCADE)


# Models for customer:
class Customer(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    project = models.OneToOneField(Project, null=True, on_delete=models.CASCADE)


class Opportunity(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    customer = models.OneToOneField(Customer, null=True, on_delete=models.CASCADE)


class Stakeholders(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    customer = models.OneToOneField(Customer, null=True, on_delete=models.CASCADE)


# Models for endeavor:
class Endeavor(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    project = models.OneToOneField(Project, null=True, on_delete=models.CASCADE)


class Team(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    endeavor = models.OneToOneField(Endeavor, null=True, on_delete=models.CASCADE)


class Work(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    endeavor = models.OneToOneField(Endeavor, null=True, on_delete=models.CASCADE)


class WayOfWork(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    endeavor = models.OneToOneField(Endeavor, null=True, on_delete=models.CASCADE)


# General models:
class Card(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    completed = models.BooleanField(default=False)
    # Endeavor models which use cards:
    team = models.ForeignKey(Team, on_delete=models.CASCADE, blank=True, null=True)
    work = models.ForeignKey(Work,  on_delete=models.CASCADE, blank=True, null=True)
    wayofwo = models.ForeignKey(WayOfWork,  on_delete=models.CASCADE, blank=True, null=True)
    # Customer models which use cards:
    opportunity = models.ForeignKey(Opportunity,  on_delete=models.CASCADE, blank=True, null=True)
    stakeholders = models.ForeignKey(Stakeholders, on_delete=models.CASCADE, blank=True, null=True)
    # Solution models which use cards:
    requirements = models.ForeignKey(Requirements,  on_delete=models.CASCADE, blank=True, null=True)
    softwaresys = models.ForeignKey(SoftwareSystems,  on_delete=models.CASCADE, blank=True, null=True)


class CardAttribute(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    task = models.CharField(max_length=200, blank=False, default='')


