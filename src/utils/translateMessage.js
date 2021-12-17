/**
 * Created by chalosalvador on 17/01/19.
 */

export const translateMessage = (type, params = {}) => {
  console.log("traducir");
  console.log(type);
  console.log(params);
  const messageList = {
    password_already_sent:'Usuario con clave', 'user':'Usuario con clave enviada',
    password_send:'Clave enviada a usuario', 'user password': 'Contraseña enviada a usuario',
    error_found:'No existe usuario', 'not found user':'Usuario no existe',    
    invalid_credentials: 'Usuario o clave incorrectos',
    'The given data was invalid.': 'Datos no válidos',
    token_expired: 'Tu sesión ha expirado',
    PERMISSION_DENIED: 'No tienes permiso para realizar esta acción',
    'auth/internal-error':
      'hmmm... Algo salió mal y no lo teníamos previsto, por favor vuelve a intentarlo.',
    'auth/argument-error': 'La URL de activación no es válida.',
    'auth/invalid-user-token': '',
    'auth/invalid-api-key': '',
    'auth/network-request-failed':
      'Parece que no estás conectado a Internet, por favor asegúrate de estar conectado e inténtalo de nuevo.',
    'auth/operation-not-allowed': '',
    'auth/requires-recent-login':
      'Por favor vuelve a iniciar sesión para completar esta acción.',
    'auth/user-token-expired': '',
    'auth/web-storage-unsupported': '',
    'auth/email-sent': `Se ha enviado el correo de verificación a ${params.email}. Por favor revisa tu bandeja de entrada.`,
    'auth/reset-password-email-sent': `Se ha enviado un correo para restablecer la contraseña a ${params.email}. Por favor revisa tu bandeja de entrada.`,
    'auth/reset-password-success':
      'Tu contraseña ha sido cambiada con éxito, enseguida serás redirigido para que inicies sesión..',
    'auth/change-password-success': 'Tu contraseña ha sido cambiada con éxito.',
    'auth/account-verified':
      'Felicidades, has activado tu cuenta, por favor inicia sesión.',
    'auth/invalid-action-code':
      'El código de activación ha caducado o ya ha sido utilizado.',
    'auth/expired-action-code': 'El código de activación ha caducado.',
    'auth/user-disabled': 'Este usuario se encuentra deshabilitado.',
    'auth/user-not-found':
      'No existe un usuario registrado con el email proporcionado.',
    'auth/wrong-password': 'Usuario o contraseña incorrectos.',
    'auth/weak-password':
      'La contraseña se considera muy débil, por favor ingresa una contraseña más fuerte.',
    'auth/popup-closed-by-user':
      'La ventana de inicio de sesión fue cerrada por el usuario.',
    'auth/account-exists-with-different-credential':
      'Este correo electrónico se encuentra registrado pero con otras credenciales, por favor intenta iniciar sesión con otro método.',
    'auth/account-exists-with-different-role': `Este correo electrónico se encuentra registrado pero con el perfil de "${params.role}", se ha iniciado sesión con este perfil, pronto podrás registrarte con ambos perfiles en Profe a Tiempo.`,
    'auth/email-already-in-use': 'Este correo electrónico ya está en uso.',
    'auth/requires-login':
      'Por favor inicia sesión para completar esta acción.',
    'auth/invalid-email': 'Correo electrónico no válido.',
    'auth/too-many-requests':
      'Ups... esas son muchas peticiones en muy poco tiempo, espera unos segundos y vuelve a intentarlo.',
    'profile/profile-saved-success':
      'Los datos de tu perfil se han guardado con éxito.',
    'profile/save-teacher-data-error':
      'Ocurrió un error al guardar la información del perfil del profesor.',
    'profile/save-student-data-error':
      'Ocurrió un error al guardar la información del perfil del estudiante.',
    'profile/not-completed-profile':
      'Debes completar tu perfil para realizar esta acción.',
    'profile/not-active-teacher':
      'Aún no eres un profe activo, asegúrate de haber completado el proceso de entrevista y aceptar el acuerdo de responsabilidad para ser activado.',
    'profile/not-accepted-teacher':
      'Aún no eres un profe aceptado, asegúrate de haber aprobado la etapa de entrevistas.',
    'profile/subscription-created-success':
      'Gracias! se ha registrado tu infomación de pago, ahora puedes empezar a solicitar clases.',
    'profile/subscription-updated-success':
      'Gracias! se ha actualizado tu infomación de pago, puedes continuar solicitando clases.',
    'profile/subscription-error':
      'Ocurrió un error al registrar tu tarjeta, por favor asegúrate que los datos son correctos e inténtalo de nuevo.',
    'class-request/save-class-request-data-success':
      'Se ha enviado tu solicitud de clase, te notificaremos tan pronto como te asignemos un profe.',
    'class-request/save-class-request-data-error':
      'Ocurrió un error al guardar la información de la solicitud.',
    'class-request/complete-profile-first':
      'Debes completar tu perfil para empezar a solicitar clases.',
    'class-request/must-be-student-to-request-class':
      'Debes estar registrado como estudiante para solicitar clases.',
    'class-request/request-expired': 'La solicitud a expirado.',
    'class-request/request-not-available':
      'Otro profesor ya ha aceptado esta clase, puedes buscar más clases en la lista.',
    'class-request/teacher-assignation-success':
      'Se te ha asignado esta clase, por favor ponte en contacto con el estudiante.',
    'class-request/teacher-assignation-error':
      'Ocurrió un error al asignarte esta clase, por favor inténtalo de nuevo o busca otra clase.',
    'class-request/teacher-data-details':
      'No tienes un profe asiganado todavía',
    'class-evaluation/cannot-evaluate-class-yet':
      'Aún no puedes calificar esta clase.',
    'class-evaluation/class-already-evaluated': 'Ya has calificado esta clase.',
    'class-evaluation/save-teacher-evaluation-success':
      'Gracias por calificar a tu profesor.',
    'class-evaluation/save-teacher-evaluation-error':
      'No se pudo guardar la calificación del profesor, por favor inténtalo nuevamente.',
    'class-evaluation/save-student-evaluation-success':
      'Gracias por calificar a tu estudiante.',
    'class-evaluation/save-student-evaluation-error':
      'No se pudo guardar la calificación del estudiante, por favor inténtalo nuevamente.',
    'search-request/complete-process-first':
      'Debes completar el proceso de selección para poder aceptar una clase.',
    'teacher-evaluation/argument-error':
      'La función debe ser llamada con un argumento "teacherId".',
  }

  return messageList[type] || type
}
