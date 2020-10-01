from django.conf.urls import url
from essence import views


urlpatterns = [
    url(r'^api/card$', views.card_list),
    url(r'^api/card/(?P<pk>[0-9]+)$', views.card_detail),
    url(r'^api/card/completed$', views.card_list_completed),
    url(r'^api/team/(?P<pk>[0-9]+)$', views.team_detail),
    url(r'^api/team$', views.team_list)
]