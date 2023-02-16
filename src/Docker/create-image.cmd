docker build --no-cache -f SQL\Dockerfile.PostgreSql -t supermagasales/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t supermagasales/app ../..
