from django.urls import include, path
from login import views

urlpatterns = [
    path('', views.flogin, name='login'),
    path('e2024/', include('e2024.urls')),  i
    path('captcha/', include('captcha.urls')),
    path('login/', include('login.urls')),
    # path('logout/', include('logout.urls')),
    # path('beranda/', include('beranda.urls')),
    # path('simproka/', include('simproka.urls')),
    # path('ekinerja/', include('ekinerja.urls')),
    # path('managemen/', include('managemen.urls')),
]
