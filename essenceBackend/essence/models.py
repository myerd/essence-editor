from django.db import models


#models for solution:
class Requirements(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class SoftwareSystems(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class Solution(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    softwareSystems = models.OneToOneField(SoftwareSystems, on_delete=models.CASCADE)
    requirements = models.OneToOneField(Requirements, on_delete=models.CASCADE)


#Models for customer:
class Opportunity(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class Stakeholders(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class Customer(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    stakeholders = models.OneToOneField(Stakeholders, on_delete=models.CASCADE)
    opportunity = models.OneToOneField(Opportunity, on_delete=models.CASCADE)


#Models for endeavor:
class Team(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class Work(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


class WayOfWork(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')


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


#General models:
class Card(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    completed = models.BooleanField(default=False)
    #Endeavor models which use cards:
    team = models.OneToOneField(Team, on_delete=models.CASCADE, blank=True, null=True)
    work = models.OneToOneField(Work,  on_delete=models.CASCADE, blank=True, null=True)
    wayofwo = models.OneToOneField(WayOfWork,  on_delete=models.CASCADE, blank=True, null=True)
    #Customer models which use cards:
    opportunity = models.OneToOneField(Opportunity,  on_delete=models.CASCADE, blank=True, null=True)
    stakeholders = models.OneToOneField(Stakeholders, on_delete=models.CASCADE, blank=True, null=True)
    #Solution models which use cards:
    requirements = models.OneToOneField(Requirements,  on_delete=models.CASCADE, blank=True, null=True)
    softwaresys = models.OneToOneField(SoftwareSystems,  on_delete=models.CASCADE, blank=True, null=True)


#user

