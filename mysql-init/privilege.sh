PW=$([ -z "${MYSQL_ROOT_PASSWORD}" ] && printf '' || printf "%s" "-p${MYSQL_ROOT_PASSWORD}")
mysql -uroot ${PW} -e "grant all privileges on *.* to ${MYSQL_USER}@'%'; flush privileges;"

