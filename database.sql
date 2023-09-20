
BEGIN;
CREATE TABLE IF NOT EXISTS antecedente
(
    id_antecedente SERIAL,
    antecedente_alergico character varying(255) ,
    antecedente_familiar character varying(255)  ,
    antecedente_personal character varying(255)  ,
    antecedente_quirurgico character varying(255)  ,
    CONSTRAINT antecedente_pkey PRIMARY KEY (id_antecedente)
);

CREATE TABLE IF NOT EXISTS cita_medica
(
    id_cita_medica SERIAL,
    especialidad character varying(255)  ,
    estado character varying(255)  ,
    fecha_fin timestamp with time zone,
    fecha_inicio timestamp with time zone,
    observacion character varying(255)  ,
    id_medico bigint,
    id_paciente bigint,
    CONSTRAINT cita_medica_pkey PRIMARY KEY (id_cita_medica)
);

CREATE TABLE IF NOT EXISTS examen_fisico
(
    id_examen_fisico SERIAL,
    estatura character varying(255)  ,
    frecuencia_respiratoria character varying(255)  ,
    peso character varying(255)  ,
    presion_arterial character varying(255)  ,
    pulso character varying(255)  ,
    temperatura character varying(255)  ,
    tipo_sanguineo character varying(255)  ,
    CONSTRAINT examen_fisico_pkey PRIMARY KEY (id_examen_fisico)
);


CREATE TABLE IF NOT EXISTS historia_clinica
(
    id_historia_clinica SERIAL,
    diagnostico character varying(255)  ,
    evolucion character varying(255)  ,
    motivo_consulta character varying(255)  ,
    numero_historia character varying(255)  ,
    id_antecedente bigint,
    id_cita_medica bigint,
    id_examen_fisico bigint,
    id_tratamiento bigint,
    CONSTRAINT historia_clinica_pkey PRIMARY KEY (id_historia_clinica)
);

CREATE TABLE IF NOT EXISTS medico
(
    id_medico  SERIAL,
    cedula character varying(255)  ,
    correo character varying(255)  ,
    especialidad character varying(255)  ,
    estado_civil character varying(255)  ,
    fecha_nacimiento timestamp(6) without time zone,
    licencia character varying(255)  ,
    primer_apellido character varying(255)  ,
    primer_nombre character varying(255)  ,
    segundo_apellido character varying(255)  ,
    segundo_nombre character varying(255)  ,
    telefono_fijo character varying(255)  ,
    telefono_movil character varying(255)  ,
    id_usuario bigint,
    CONSTRAINT medico_pkey PRIMARY KEY (id_medico)
);

CREATE TABLE IF NOT EXISTS paciente
(
    id_paciente SERIAL,
    cedula character varying(10)  ,
    correo character varying(255)  ,
    estado_civil character varying(255)  ,
    fecha_nacimiento date,
    primer_apellido character varying(255)  ,
    primer_nombre character varying(255)  ,
    segundo_apellido character varying(255)  ,
    segundo_nombre character varying(255)  ,
    telefono_fijo character varying(255)  ,
    telefono_movil character varying(255)  ,
    id_usuario bigint,
    CONSTRAINT paciente_pkey PRIMARY KEY (id_paciente),
    CONSTRAINT uk_fkia3okytet08hwlgoj025ocp UNIQUE (correo)
);

CREATE TABLE IF NOT EXISTS recaudacion
(
    id_recaudacion SERIAL,
    apellido character varying(255)  ,
    cedula character varying(255)  ,
    edad integer NOT NULL,
    estado character varying(255)  ,
    monto double precision,
    nombre character varying(255)  ,
    numero_comprobante bigint,
    CONSTRAINT recaudacion_pkey PRIMARY KEY (id_recaudacion)
);

CREATE TABLE IF NOT EXISTS secretaria
(
    id_secretaria SERIAL,
    cedula character varying(10)  ,
    correo character varying(255)  ,
    estado_civil character varying(255)  ,
    fecha_nacimiento date,
    primer_apellido character varying(255)  ,
    primer_nombre character varying(255)  ,
    segundo_apellido character varying(255)  ,
    segundo_nombre character varying(255)  ,
    telefono_fijo character varying(255)  ,
    telefono_movil character varying(255)  ,
    id_usuario bigint,
    CONSTRAINT secretaria_pkey PRIMARY KEY (id_secretaria),
    CONSTRAINT uk_dkip7ttiv0gjy4t8ygvqy5t7e UNIQUE (correo)
);

CREATE TABLE IF NOT EXISTS tratamiento
(
    id_tratamiento SERIAL,
    duracion character varying(255)  ,
    indicaciones character varying(255)  ,
    medicacion character varying(255)  ,
    CONSTRAINT tratamiento_pkey PRIMARY KEY (id_tratamiento)
);

CREATE TABLE IF NOT EXISTS usuario
(
    id_usuario SERIAL,
    activo boolean,
    contrasenia character varying(255)  ,
    correo character varying(255)  ,
    nombre_usuario character varying(255)  ,
    tipo_usuario character varying(255)  ,
    CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
);

ALTER TABLE IF EXISTS cita_medica
    ADD CONSTRAINT fk8gcia373pwl3lc5qvlclwfg46 FOREIGN KEY (id_paciente)
    REFERENCES  paciente (id_paciente) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS cita_medica
    ADD CONSTRAINT fkkn6lchcxpk6khkhbhns3p3q7e FOREIGN KEY (id_medico)
    REFERENCES  medico (id_medico) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS historia_clinica
    ADD CONSTRAINT fk10wimphlgergokd8sgupwpptp FOREIGN KEY (id_cita_medica)
    REFERENCES  cita_medica (id_cita_medica) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS historia_clinica
    ADD CONSTRAINT fk8q5hofednljy9twx4sdhlih0m FOREIGN KEY (id_antecedente)
    REFERENCES  antecedente (id_antecedente) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS historia_clinica
    ADD CONSTRAINT fk9rsschs03m8ctvw17pqk2gvlu FOREIGN KEY (id_examen_fisico)
    REFERENCES  examen_fisico (id_examen_fisico) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS historia_clinica
    ADD CONSTRAINT fkcfqttyuwmf0i0re6q05su97jn FOREIGN KEY (id_tratamiento)
    REFERENCES  tratamiento (id_tratamiento) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS medico
    ADD CONSTRAINT fk88ukndsp99d9kgb7kg5oj0v22 FOREIGN KEY (id_usuario)
    REFERENCES  usuario (id_usuario) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS paciente
    ADD CONSTRAINT fk1vx4fcl7eb0wbyvff1184dr0m FOREIGN KEY (id_usuario)
    REFERENCES usuario (id_usuario) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS secretaria
    ADD CONSTRAINT fkpk3e7yahwqjlytp9w1evenc6p FOREIGN KEY (id_usuario)
    REFERENCES  usuario (id_usuario) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;