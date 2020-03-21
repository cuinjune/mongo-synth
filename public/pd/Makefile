LIBPD_DIR = ../../libpd/

SRC_FILES = synth.cpp
TARGET = synth.html

CXXFLAGS = -I$(LIBPD_DIR)/pure-data/src -I$(LIBPD_DIR)/cpp -I$(LIBPD_DIR)/libpd_wrapper -I$(LIBPD_DIR)/libpd_wrapper/util -O3
LDFLAGS = -L$(LIBPD_DIR)/libs -lpd -lm

.PHONY: clean clobber

$(TARGET): $(SRC_FILES) synth.pd
	emcc $(CXXFLAGS) --bind -o $(TARGET) $(SRC_FILES) --closure 1 -s USE_SDL=2 -s ERROR_ON_UNDEFINED_SYMBOLS=0 --preload-file synth.pd $(LDFLAGS)
