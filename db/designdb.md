CREATE TABLE USERS (
    ID              INT  PRIMARY KEY,
    FNAME           VARCHAR(40) NOT NULL,
    LNAME           VARCHAR(40) NOT NULL,

    USERNAME        VARCHAR(40) UNIQUE NOT NULL,
    PASSWORD        VARCHAR(40) NOT NULL,

    DATE_OF_REGISTRATION        DATE,
    DATE_OF_LASTEST_LOGON       DATE
);

INSERT INTO USERS VALUES (0, 'admin','admin','admin','admin','2019-1-1','2019-1-12');
INSERT INTO USERS VALUES (1, 'John','Thomson','thomson22','thomson121','2019-1-3','2019-1-11');
INSERT INTO USERS VALUES (2, 'Pos','Lyly','lylypos12','lylypos112','2019-1-3','2019-1-4');
