from django.conf.urls import url, include
from . import views
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.renderers import SwaggerUIRenderer, OpenAPIRenderer

schema_view = get_schema_view(title='Users API', renderer_classes=[OpenAPIRenderer, SwaggerUIRenderer])

urlpatterns = [
    url(r'^api/card$', views.card_list),
    url(r'^api/card/(?P<pk>[0-9]+)$', views.card_detail),
    url(r'^api/card/(?P<pk>[0-9]+)/data$', views.card_data),
    url(r'^api/card/data/(?P<pk2>[0-9]+)$', views.card_data_update),
    url(r'^api/card/completed$', views.card_list_completed),
    url(r'^api/project/(?P<pk>[0-9]+)$', views.project_list),
    url(r'^api/project/(?P<pk>[0-9]+)/solution$', views.solution_list),
    url(r'^api/solution/(?P<pk>[0-9]+)/requirements$', views.requirements),
    url(r'^api/requirements/(?P<pk>[0-9]+)/card$', views.requirements_card_list),
    url(r'^api/solution/(?P<pk>[0-9]+)/softwaresystems$', views.softwaresystems),
    url(r'^api/softwaresystems/(?P<pk>[0-9]+)/card$', views.softwaresystems_card_list),
    url(r'^api/project/(?P<pk>[0-9]+)/customer$', views.customer_list),
    url(r'^api/customer/(?P<pk>[0-9]+)/stakeholders$', views.stakeholders),
    url(r'^api/stakeholders/(?P<pk>[0-9]+)/card$', views.stakeholders_card_list),
    url(r'^api/customer/(?P<pk>[0-9]+)/opportunity$', views.opportunity),
    url(r'^api/opportunity/(?P<pk>[0-9]+)/card$', views.opportunities_card_list),
    url(r'^api/project/(?P<pk>[0-9]+)/endeavor$', views.endeavor_list),
    url(r'^api/endeavor/(?P<pk>[0-9]+)/work$', views.work),
    url(r'^api/work/(?P<pk>[0-9]+)/card$', views.work_card_list),
    url(r'^api/endeavor/(?P<pk>[0-9]+)/team$', views.team_list),
    url(r'^api/team/(?P<pk>[0-9]+)/card$', views.team_card_list),
    url(r'^api/endeavor/(?P<pk>[0-9]+)/wayofwork$', views.wayofwork),
    url(r'^api/wayofwork/(?P<pk>[0-9]+)/card$', views.wayofwork_card_list),
    url(r'^auth/refresh-token/', refresh_jwt_token),
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/signup/', include('rest_auth.registration.urls')),
    url(r'^', schema_view, name="docs"),
]