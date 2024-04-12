import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout, QMessageBox

class CommonPedagogicalInterface(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Interface du Coordinateur Pédagogique / Chef de Département / Directeur des Études")
        self.resize(400, 300)

        self.btn_voir_rapport = QPushButton("Voir Rapport")
        self.btn_rediger_rapport = QPushButton("Rédiger Rapport")
        self.btn_deconnexion = QPushButton("Déconnexion")

        layout = QVBoxLayout()
        layout.addWidget(self.btn_voir_rapport)
        layout.addWidget(self.btn_rediger_rapport)
        layout.addWidget(self.btn_deconnexion)
        self.setLayout(layout)

        self.btn_deconnexion.clicked.connect(self.deconnexion)

    def deconnexion(self):
        reply = QMessageBox.question(self, "Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", QMessageBox.Yes | QMessageBox.No)
        if reply == QMessageBox.Yes:
            sys.exit()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    interface = CommonPedagogicalInterface()
    interface.show()
    sys.exit(app.exec_())
