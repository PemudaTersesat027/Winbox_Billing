
#pragma once

#include <QObject>
#include <QMessageBox>
#include <QString>

class Bridge : public QObject
{
    Q_OBJECT

public:
    explicit Bridge(QObject *parent = nullptr)
        : QObject(parent)
    {
    }

public slots:
    QString appVersion() const
    {
        return "1.0.0";
    }

    void showMessage(const QString &message)
    {
        QMessageBox::information(
            nullptr,
            "Pesan dari React",
            message
        );
    }

signals:
    void messageFromCpp(const QString &message);
};
