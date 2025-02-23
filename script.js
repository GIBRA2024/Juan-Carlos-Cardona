function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Jimenez Arana;Javier;;;
FN:Javier Jimenez Arana
TEL:+57 315 5843205
EMAIL;TYPE=WORK: gerencia@cervalle.com
ADR;TYPE=WORK:;;Cra. 29b #11-90;Acopi;Yumbo;;Colombia
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
