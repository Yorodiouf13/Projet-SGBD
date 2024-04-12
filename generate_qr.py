import qrcode
from qrcode.constants import ERROR_CORRECT_L

#Données à encoder dans le QRcode
lien_google_drive = "https://docs.google.com/document/d/1krQAJTO1T_pZgb8xAN3O-PsJgA4ko8ybGjdEbJb9DTE/edit?usp=sharing"

data = lien_google_drive

#Génération du QRcode
qr = qrcode.QRCode(version=1, error_correction=ERROR_CORRECT_L, box_size=10, border=4)
qr.add_data(data)
qr.make(fit=True)

#Création d'une image QRcode
qr_image=qr.make_image(fill_color="purple", back_color="white")
qr_image.save("qrcode.png") #Image du QRcode sous format .png