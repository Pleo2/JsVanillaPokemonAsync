# **PokemonAsync**

Son diferentes implementaciones de diferentes APIs utilizando JavaScript vanilla, ademas del uso del local storage para mejorar la experiencia de usuario, la web cuenta con responsive design(mobile first 馃摫 "375px", "768px", "1024px","1440px").

## **Estado actual del proyecto**

Proyecto en produccion. Url del proyecto: [https://pleo2.github.io/JsVanillaPokemonAsync/index.html](https://pleo2.github.io/JsVanillaPokemonAsync/).

### **Requisitos de versionamiento git en los branch**

En los branch se utilizar谩 la convensi贸n de acuerdo a dos categorias de ramas: ramas regulares y temporales.

**Ramas Regulares:** Estas ramas estar谩n disponibles en su repositorio de forma permanente. Su convenci贸n de nomenclatura es simple y directa.

-   **Development (_dev_)** es la principal rama de desarrollo. La idea de la rama de desarrollo es realizar cambios en ella y evitar que los desarrolladores realicen cambios en la rama main directamente. Los cambios en la rama de desarrollo se someten a revisiones y despu茅s de la prueba, se fusionan con la rama main.
-   **Master (_main_)** es la rama predeterminada disponible en el repositorio de Git. Debe ser estable todo el tiempo y no permitir谩 ning煤n registro directo. Solo puede fusionarlo despu茅s de la revisi贸n del c贸digo. Todos los miembros del equipo son responsables de mantener al maestro estable y actualizado.
-   **QA/Test (_QA/test_)** contiene todo el c贸digo para las pruebas de QA y las pruebas de automatizaci贸n de todos los cambios implementados. Antes de que cualquier cambio vaya al entorno de producci贸n, debe someterse a las pruebas de control de calidad para obtener una base de c贸digo estable.
-   **Staging (_staging_)** contiene caracter铆sticas probadas que las partes interesadas quer铆an que estuvieran disponibles para una demostraci贸n o una propuesta antes de pasar a la producci贸n. Aqu铆 se toman las decisiones si una caracter铆stica debe finalmente incorporarse al c贸digo de producci贸n.

**Ramas Temporales:** estas son las ramas que se pueden crear y eliminar cuando sea necesario. Pueden ser los siguientes:

-   **Feature (_feature_)** cualquier cambio de c贸digo para un nuevo m贸dulo o caso de uso debe realizarse en una rama de funciones. Esta rama se crea en funci贸n de la rama de desarrollo actual.
-   **Bug Fix (_bugfix_)** si los cambios de c贸digo realizados desde la rama de funciones fueron rechazados despu茅s de un lanzamiento, sprint o demostraci贸n, cualquier correcci贸n necesaria despu茅s de eso debe hacerse en la rama de correcci贸n de errores.
-   **Hot Fix (_hotfix_)** Si es necesario reparar un bloqueador, hacer un parche temporal, aplicar un marco cr铆tico o un cambio de configuraci贸n que debe manejarse de inmediato, debe crearse como una revisi贸n. No sigue la integraci贸n programada del c贸digo y podr铆a fusionarse directamente con la rama de producci贸n y luego en la rama de desarrollo.
-   **Experimental (_experimental_)** Cualquier nueva caracter铆stica o idea que no sea parte de un lanzamiento o un sprint. Una rama para jugar.
-   **Build (_build_)** Una rama espec铆ficamente para crear artefactos de compilaci贸n espec铆ficos o para ejecutar ejecuciones de cobertura de c贸digo.
-   **Release (_release_)** Una rama para etiquetar una versi贸n de lanzamiento espec铆fica.
-   **Merging (_merge_)** Una rama temporal para resolver conflictos de fusi贸n, generalmente entre el 煤ltimo desarrollo y una funci贸n o rama Hotfix. Esto tambi茅n se puede utilizar si dos ramas de una funci贸n en la que est谩n trabajando varios desarrolladores deben fusionarse, verificarse y finalizarse.

El nombre del branch debe estar estructurado de la siguiente forma:

```
<token>/<short-descriptive-name>
```

Ejemplos de nombre de brach:

```
feature/JIRA-1234_support-dark-theme
```

```
bugfix/more-gray-shades
```

```
hotfix/disable-endpoint-zero-day-exploit
```

```
experimental/dark-theme-support
```

```
release/myapp-1.01.123
```

Se recomienda encarecidamente utilizar el flujo de trabajo de [gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow) utilizado por la instituci贸n Atlassian.

### **Requisitos de versionamiento git en los commit**

El mensaje del commit debe estar estructurado de la siguiente forma:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

El commit contiene los siguientes elementos estructurales en el type:

-   **build:** cambios que afectan el sistema de compilaci贸n o las dependencias externas (谩mbitos de ejemplo: gulp, br贸coli, npm)
-   **ci:** cambios en nuestros archivos de configuraci贸n y scripts de CI (谩mbitos de ejemplo: Travis, Circle, BrowserStack, SauceLabs)
-   **chore:** actualizaci贸n de tareas rutinarias, etc. sin cambio de c贸digo de producci贸n (ejemplo: modificar el .gitignore, m茅todos internos privados)
-   **docs:** cambios solamente en la documentaci贸n
-   **feat:** introduce nuevas caracter铆sticas en la base del c贸digo
-   **fix:** corrige un error en la base del c贸digo
-   **perf:** un cambio de c贸digo que mejora el rendimiento
-   **refactor:** un cambio de c贸digo que no corrige un error ni agrega una caracter铆stica, s贸lamente refactorizar c贸digo
-   **style:** cambios que no afectan el significado del c贸digo (espacios en blanco, formato, punto y coma que faltan, etc.)
-   **test:** agregar pruebas faltantes o corregir pruebas existentes

Se puede agregar un 谩mbito al tipo de commit para proveer informaci贸n contextual adicional y se escribe entre par茅ntesis, ejemplos, `feat(parser): add ability to parse arrays`, `feat(authentication): add autentication users in dashboard`.

Ejemplos de commit:

```
feat: allow provided config object to extend other configs
```

```
docs: correct spelling of CHANGELOG
```

```
feat(lang): added polish language
```

```
fix(player): fix player initialization
```

```
refactor(auth): improve refresh token logic
```

Referencias:  
[Git Branching Naming Convention: Best Practices](https://codingsight.com/git-branching-naming-convention-best-practices/)  
[Git Branch Naming Convention](https://dev.to/couchcamote/git-branching-name-convention-cch)  
[Flujo de trabajo de Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)  
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)  
[The Angular Convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

## **Instalaci贸n y funcionamiento**

Su funcionamiento ser谩 mediante el acceso a un servidor de prueba, para acceder a ello solo es necesario el un navegador con acceso a internet y la url a la homepage.

## **Tecnolog铆as Utilizadas**

-   HTML5
-   CSS3
-   JasvsScript
-   Tailwind
-   nodejs(npm)

## **Bugs y errores conocidos**

Sin bugs y errores conocidos

## **Actualizaciones pendientes**

Sin actualizaciones pendientes

## **Versiones**

-   V1.0.0: Proyecto inicial con caracter铆scas b谩sicas
