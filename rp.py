import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout, QMessageBox

class ResponsiblePedagogicalInterface(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Interface du Responsable Pédagogique")
        self.resize(400, 300)

        self.btn_suivi_cahier_texte = QPushButton("Suivi Cahier de Texte")
        self.btn_voir_feedback = QPushButton("Voir Feedback")
        self.btn_rediger_rapport = QPushButton("Rédiger Rapport")
        self.btn_deconnexion = QPushButton("Déconnexion")

        layout = QVBoxLayout()
        layout.addWidget(self.btn_suivi_cahier_texte)
        layout.addWidget(self.btn_voir_feedback)
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
    interface = ResponsiblePedagogicalInterface()
    interface.show()
    sys.exit(app.exec_())
