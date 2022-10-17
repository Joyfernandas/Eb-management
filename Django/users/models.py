from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser,BaseUserManager

# Create your models here.
ROLE = [('Manager', 'Manager'), ('Employee', 'Employee'),
        ('NewCustomer', 'NewCustomer')]

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)



        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


 

class CustomUser(AbstractUser):
    role = models.CharField("Role", max_length=255,
                            choices=ROLE, null=True, blank=True)
    email = models.EmailField("Email", max_length=255,
                              unique=True, null=True, blank=True)
    customer = models.ForeignKey("master.Customer", verbose_name="coustomer", 
                                 on_delete=models.CASCADE, null=True, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()