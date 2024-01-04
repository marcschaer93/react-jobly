\echo 'Delete and recreate jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

-- DROP DATABASE jobly;
-- CREATE DATABASE jobly;
-- \connect jobly
DROP DATABASE react_jobly_render_db
CREATE DATABASE react_jobly_render_db
\connect react_jobly_render_db

\i jobly-schema.sql
\i jobly-seed.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly_test;
CREATE DATABASE jobly_test;
\connect jobly_test

\i jobly-schema.sql
