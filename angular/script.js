var app = angular.module('miApp', []);

app.controller('AlumnoControler', function ($scope) {

    $scope.alumnos = [
        { id: 1, nombre: 'Juan Pérez', telefono: '123456789', curso: 'Matemáticas' },
        { id: 2, nombre: 'Ana Gómez', telefono: '987654321', curso: 'Historia' }
    ];


    $scope.nuevoAlumno = {};
    $scope.contactToModify = {};


    $scope.formType = '';


    $scope.ShowForm = function (type) {
        $scope.formType = type;
        if (type === 'modificar') {

            $scope.contactToModify = angular.copy($scope.selectedAlumno);
        }
    };


    $scope.Save = function () {
        if ($scope.nuevoAlumno.nombre && $scope.nuevoAlumno.telefono && $scope.nuevoAlumno.curso) {

            $scope.nuevoAlumno.id = $scope.alumnos.length ? $scope.alumnos[$scope.alumnos.length - 1].id + 1 : 1;
            $scope.alumnos.push($scope.nuevoAlumno);
            $scope.nuevoAlumno = {};
            $scope.formType = '';
        }
    };


    $scope.Update = function () {

        for (var i = 0; i < $scope.alumnos.length; i++) {
            if ($scope.alumnos[i].id === $scope.contactToModify.id) {

                $scope.alumnos[i].nombre = $scope.contactToModify.nombre;
                $scope.alumnos[i].telefono = $scope.contactToModify.telefono;
                $scope.alumnos[i].curso = $scope.contactToModify.curso;
                break;
            }
        }
        $scope.contactToModify = {};
        $scope.formType = '';
    };

    $scope.CancelUpdate = function () {
        $scope.contactToModify = {};
        $scope.formType = '';
    };


    $scope.Edit = function (alumno) {
        $scope.selectedAlumno = alumno;
        $scope.ShowForm('modificar');
    };


    $scope.ConfirmDelete = function (alumno) {
        if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
            var index = $scope.alumnos.indexOf(alumno);
            if (index !== -1) {
                $scope.alumnos.splice(index, 1);
            }
        }
    };
});
