from django.shortcuts import render, redirect
from .forms import LoginForm
from django.contrib.auth import authenticate, login
from managemen.fungsi import initurl,cekdata
from managemen.kunci import mlebu

def flogin(request):
  form = LoginForm(request.POST)
  msg = None  
  if request.method == 'POST' :
    if form.is_valid():
      username = form.cleaned_data.get('username')
      real_sandi = form.cleaned_data.get('real_sandi')

      sanitasi_token = mlebu.monggo_pinarak(username,real_sandi)

      if sanitasi_token.dt_hslcek :
        user = authenticate(username=username, password=real_sandi)

        try :
          val_path = cekdata.cek_string_sanitize(form.data['next'],'url')
          redirect_path = val_path[1]
        except :
          redirect_path = initurl.data + '/beranda/'
          
        if user is not None:
          login(request, user)
          return redirect(redirect_path)
        else:    
          msg = real_sandi    
      else :
        msg = 'Nama Pengguna dan Kata Sandi Salah!'
    else:
      msg = 'Nama Pengguna, Kata Sandi dan Captcha Salah!'    
  return render(request, 'login.html', {'form':form, 'msg' : msg})
