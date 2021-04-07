const { Router } = require('express');
const { check } = require('express-validator');
const { 
  usuariosGet, 
  usuariosPut, 
  usuariosPatch, 
  usuariosPost, 
  usuariosDelete } = require('../controllers/usuarios');
const { 
  esRoleValido, 
  emailExiste,
  emailUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(emailUsuarioPorId),
  check('rol').custom(esRoleValido),
  validarCampos
], usuariosPut);

router.patch('/', usuariosPatch);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe tener más de 6 chars').isLength({ min: 6 }),
  //check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom(emailExiste),
  check('rol').custom(esRoleValido),
  validarCampos
], usuariosPost);

router.delete('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(emailUsuarioPorId),
  validarCampos
], usuariosDelete);

module.exports = router;
