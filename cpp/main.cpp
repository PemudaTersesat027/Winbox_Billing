
#include <QApplication>
#include <QMainWindow>
#include <QWebEngineView>
#include <QWebEnginePage>
#include <QWebChannel>
#include <QWebEngineSettings>
#include <QUrl>
#include <QDebug>

#include "Bridge.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QApplication::setApplicationName("QtReactApp");
    QApplication::setApplicationVersion("1.0.0");

    QMainWindow window;

    auto *webView = new QWebEngineView(&window);

    // WebChannel
    auto *channel = new QWebChannel(webView->page());
    auto *bridge = new Bridge(channel);

    channel->registerObject("bridge", bridge);
    webView->page()->setWebChannel(channel);

    // Debug loading
    QObject::connect(
        webView,
        &QWebEngineView::loadFinished,
        [](bool success) {
            qDebug() << "React page loaded:" << success;
        }
    );

    // Window configuration
    window.setCentralWidget(webView);
    window.resize(1280, 800);
    window.setMinimumSize(900, 600);
    window.setWindowTitle("Qt + React Desktop");

    // Load React
    webView->load(QUrl("http://127.0.0.1:5173"));

    window.show();

    return app.exec();
}
