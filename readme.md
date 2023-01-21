# Repository for fast deployment of an Apache2 dockerized instance.

## How to get a list of the installable modules for apache2?
```
apt search libapache2-mod
```

## How to install a module?
After choosing from the list, or reading the manual for the web-app you are trying to deploy ,such as wordpress, where it should be listed the needed modules, you can run the command.  
```
apt install libapache2-mod-python
```
The above command would install python support for example.

## How to enable/disable modules?
After installing, you have to enable the  module.
```
a2enmod 'module_name'
example.: a2enmod python
```

To disable a mod, just go
```
a2dismod python
```

## How to host more than one site under the same server?
Name Base Virtual Host.
```
a2ensite
a2dissite
```
## Where can I find the sites that are enabled by default?
`/etc/apache2/sites-available`
