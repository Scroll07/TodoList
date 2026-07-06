from datetime import date
from typing import List, Optional
from sqlalchemy import ForeignKey, String, Date, Boolean, select
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)  # Числовой ID (например, 1488)
    username: Mapped[str] = mapped_column(String(50), unique=True)
    hash_password: Mapped[str] = mapped_column(String(255))
    name: Mapped[str] = mapped_column(String(100))

class Project(Base):
    __tablename__ = "projects"
    id: Mapped[int] = mapped_column(primary_key=True)
    created_at: Mapped[date] = mapped_column(Date)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[Optional[str]] = mapped_column(String(500))
    deadline: Mapped[date] = mapped_column(Date)
    priority: Mapped[str] = mapped_column(String(20))
    category: Mapped[str] = mapped_column(String(50))
    completed: Mapped[bool] = mapped_column(Boolean, default=False)

    # Связи
    owner: Mapped["User"] = relationship(back_populates="owned_projects")
    tasks: Mapped[List["Task"]] = relationship(back_populates="project")

class Task(Base):
    __tablename__ = "tasks"

    id: Mapped[str] = mapped_column(String(50), primary_key=True)  # Строковый ID (например, t123)
    
    # Исполнитель может отсутствовать (nullable), поэтому используем Optional
    executor: Mapped[Optional[int]] = mapped_column(ForeignKey("users.id"))
    
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[Optional[str]] = mapped_column(String(500))
    deadline: Mapped[date] = mapped_column(Date)
    priority: Mapped[str] = mapped_column(String(20))
    category: Mapped[str] = mapped_column(String(50))
    completed: Mapped[bool] = mapped_column(Boolean, default=False)
    
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id"))
    created_by: Mapped[int] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[date] = mapped_column(Date)

    # Настройка связей. 
    # Поскольку у нас две связи с таблицей User (через executor и created_by), 
    # нужно явно передавать параметр foreign_keys, чтобы SQLAlchemy не запуталась.
    executor_user: Mapped[Optional["User"]] = relationship(
        back_populates="assigned_tasks", 
        foreign_keys=[executor]
    )
    creator: Mapped["User"] = relationship(
        back_populates="created_tasks", 
        foreign_keys=[created_by]
    )
    project: Mapped["Project"] = relationship(back_populates="tasks")