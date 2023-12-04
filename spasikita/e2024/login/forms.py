from django import forms
from managemen.models import Pengguna
from captcha.fields import CaptchaField

class LoginForm(forms.ModelForm):
    captcha = CaptchaField()
    class Meta:
        model = Pengguna
        fields = [
            'username','real_sandi'
        ]
