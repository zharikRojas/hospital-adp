create database hospital;
use hospital;

-- tabla de roles de usuario (medico-paciente)
create table roles (
id_rol int primary key not null,
nombre_rol varchar(20) not null
);

-- tabla estado cita
create table estadoCita(
id_estadoCita int primary key not null,
estado varchar(20)
);

-- tabla especialidad
create table especialidad(
id_especialidad int primary key not null,
nombreEspecialidad varchar(30)
);

-- tabla de usuario
create table usuario (
id_usuario int auto_increment primary key not null,
cedula varchar(15) not null,
nombre varchar(30) not null ,
contrasenia varchar(20) not null,
id_rol int not null,
foreign key (id_rol) references roles(id_rol),
UNIQUE(cedula)
);

-- tabla de cita
create table cita (
id_cita int auto_increment primary key not null,
fecha_hora datetime not null,
novedad varchar(255),
id_especialidad int not null,
id_paciente int not null,
id_medico int not null,
id_estadoCita int not null,
foreign key(id_paciente) references usuario(id_usuario),
foreign key(id_medico) references usuario(id_usuario),
foreign key(id_especialidad) references especialidad(id_especialidad),
foreign key(id_estadoCita) references estadoCita(id_estadoCita)
);

insert into roles values(1, 'Medico');
insert into roles values(2, 'Paciente');

insert into estadoCita values(1, 'Activa');
insert into estadoCita values(2, 'Cancelada');

insert into especialidad values(1, 'Medicina General');
insert into especialidad values(2, 'Odontología');
insert into especialidad values(3, 'Cardiología');

insert into usuario(cedula,nombre,contrasenia,id_rol) values(12345, 'Carlos Perez', '12345', 1);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(10123, 'Diana Bohorquez ', '10123', 1);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(13579, 'Carolina Gutierrez ', '13579', 1);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(97513, 'Guillermo Sanchez', '97513', 2);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(34567, 'Martin Flores', '34567', 2);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(67891, 'Juliana Bonilla', '67891', 2);
insert into usuario(cedula,nombre,contrasenia,id_rol) values(89765, 'Camila Gonzalez', '89765', 2);

insert into cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-02 14:30:00',2,4,1,1);
insert into cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-03 11:30:00',2,5,2,1);
insert into cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-04 10:30:00',2,6,3,1);
insert into cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-05 18:30:00',2,7,1,2);

insert into cita (fecha_hora,id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-03 08:30:00',1,5,1,1);
insert into cita (fecha_hora,id_especialidad, id_paciente, id_medico, id_estadoCita) values('2024-01-03 15:25:00',1,4,1,1);
INSERT INTO cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) VALUES("2023-12-30 17:10:00",2,6,3,1);
INSERT INTO cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) VALUES ("2023-12-30 17:10:00",2,7,2,1);
INSERT INTO cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) VALUES ("23-12-30 17:10:00", 3,7,1,2);



