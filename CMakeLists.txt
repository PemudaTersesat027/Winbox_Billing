
cmake_minimum_required(VERSION 3.21)

project(QtReactApp VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_AUTOMOC ON)

find_package(Qt6 6.12 REQUIRED COMPONENTS
    Widgets
    WebEngineWidgets
    WebChannel
)

qt_add_executable(QtReactApp
    cpp/main.cpp
    cpp/Bridge.h
)

target_link_libraries(QtReactApp PRIVATE
    Qt6::Widgets
    Qt6::WebEngineWidgets
    Qt6::WebChannel
)
