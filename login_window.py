import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout, QMessageBox

class LoginInterface(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Interface de Connexion")
        self.resize(300, 200)

        self.username_label = QLabel("Nom d'utilisateur:")
        self.username_input = QLineEdit()
        self.password_label = QLabel("Mot de passe:")
        self.password_input = QLineEdit()
        self.password_input.setEchoMode(QLineEdit.Password)
        self.login_button = QPushButton("Se connecter")

        layout = QVBoxLayout()
        layout.addWidget(self.username_label)
        layout.addWidget(self.username_input)
        layout.addWidget(self.password_label)
        layout.addWidget(self.password_input)
        layout.addWidget(self.login_button)
        self.setLayout(layout)

        self.login_button.clicked.connect(self.login)

    def login(self):
        username = self.username_input.text()
        password = self.password_input.text()

        if password == "passer":
            if username == "responsablepedagogique@esp.sn":
                self.open_interface("rp.py")
            elif username in ["coordinateurpedagogique@esp.sn", "chefdepartement@esp.sn", "directeurdesetudes@esp.sn"]:
                self.open_interface("cp.py")
            else:
                QMessageBox.warning(self, "Erreur de connexion", "Nom d'utilisateur incorrect.")
        else:
            QMessageBox.warning(self, "Erreur de connexion", "Mot de passe incorrect.")

    def open_interface(self, interface_name):
        # Code pour ouvrir l'interface spécifiée
        if interface_name == "rp.py":
            # Ouvrir l'interface pour le responsable pédagogique
            pass
        elif interface_name == "cp.py":
            # Ouvrir l'interface pour le coordinateur pédagogique, le chef de département ou le directeur des études
            pass

if __name__ == "__main__":
    app = QApplication(sys.argv)
    login_interface = LoginInterface()
    login_interface.show()
    sys.exit(app.exec_())
