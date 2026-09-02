# Ocultador de Banner

Extensión sencilla para navegadores que elimina automáticamente un elemento visual específico de una página web.

Compatible con:

* Mozilla Firefox
* Google Chrome
* Microsoft Edge
* Opera GX

---

## 📁 Archivos

La extensión está compuesta por dos archivos:

```text
extension/
├── manifest.json
└── content.js
```

Ambos archivos deben permanecer en la misma carpeta.

---

#  Mozilla Firefox

## Firefox Developer Edition

La forma más sencilla de utilizar una extensión local sin publicarla es mediante Firefox Developer Edition.

### 1. Abrir la configuración avanzada

Escribe en la barra de direcciones:

```text
about:config
```

Acepta la advertencia si aparece.

Busca:

```text
xpinstall.signatures.required
```

y establece su valor en:

```text
false
```

### 2. Crear el archivo de extensión

Crea un archivo ZIP que contenga directamente:

```text
manifest.json
content.js
```

Por ejemplo:

```text
extension.zip
├── manifest.json
└── content.js
```

Después cambia la extensión del archivo:

```text
extension.zip
```

a:

```text
extension.xpi
```

### 3. Instalar

Abre:

```text
about:addons
```

Selecciona el menú ⚙️ y elige:

**Instalar complemento desde archivo...**

Selecciona el archivo `.xpi`.

La extensión quedará instalada.

> **Nota:** El método de instalación puede variar dependiendo de la edición y configuración de Firefox. En Firefox estándar, Mozilla requiere que las extensiones instalables estén firmadas.

---

#  Google Chrome

### 1. Abrir la página de extensiones

Escribe:

```text
chrome://extensions/
```

### 2. Activar el modo desarrollador

Activa:

**Modo de desarrollador**

en la esquina superior derecha.

### 3. Cargar la extensión

Haz clic en:

**Cargar descomprimida**

Selecciona la carpeta que contiene:

```text
manifest.json
content.js
```

Por ejemplo:

```text
📁 extension
   ├── manifest.json
   └── content.js
```

Selecciona **la carpeta**, no los archivos individuales.

### 4. Comprobar el funcionamiento

Abre la página correspondiente y actualízala.

El elemento configurado para ocultarse debería desaparecer automáticamente.

---

#  Microsoft Edge

### 1. Abrir las extensiones

Escribe:

```text
edge://extensions/
```

### 2. Activar el modo desarrollador

Activa:

**Modo de desarrollador**

### 3. Cargar la extensión

Haz clic en:

**Cargar descomprimida**

Selecciona la carpeta:

```text
📁 extension
   ├── manifest.json
   └── content.js
```

### 4. Comprobar

Abre la página correspondiente y actualízala.

---

#  Opera GX

### 1. Abrir las extensiones

Escribe:

```text
opera://extensions/
```

### 2. Activar el modo desarrollador

Activa:

**Modo desarrollador**

### 3. Cargar la extensión

Haz clic en:

**Cargar descomprimida**

y selecciona la carpeta:

```text
📁 extension
   ├── manifest.json
   └── content.js
```

---

# Problemas frecuentes

### La extensión no aparece

Comprueba que la estructura sea exactamente:

```text
extension/
├── manifest.json
└── content.js
```

También verifica que Windows no haya agregado accidentalmente `.txt` al nombre de los archivos.

Por ejemplo, esto es incorrecto:

```text
manifest.json.txt
content.js.txt
```

---

### La extensión aparece pero no hace nada

Comprueba que:

* La extensión esté habilitada.
* El sitio web coincida con las páginas configuradas en `manifest.json`.
* La extensión haya sido recargada después de cualquier modificación.
* La página web haya sido actualizada después de recargar la extensión.
